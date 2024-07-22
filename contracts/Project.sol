// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Project {
    struct Ticket {
        string description;
        uint256 reward;
        address payable creator;
        bool completed;
    }

    string public name;
    string public description;
    address public owner;
    uint256 public ticketCount;
    mapping(uint256 => Ticket) public tickets;

    event TicketCreated(uint256 ticketId, string description, uint256 reward, address creator);
    event TicketCompleted(uint256 ticketId, address creator, uint256 reward);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the project owner");
        _;
    }

    constructor(string memory _name, string memory _description, address _owner) {
        name = _name;
        owner = _owner;
        description = _description;
    }

    function createTicket(string calldata _description) external payable {
        require(msg.value > 0, "Reward must be greater than 0");

        tickets[ticketCount] = Ticket({
            description: _description,
            reward: msg.value,
            creator: payable(msg.sender),
            completed: false
        });

        emit TicketCreated(ticketCount, _description, msg.value, msg.sender);
        ticketCount++;
    }

    function completeTicket(uint256 _ticketId) external onlyOwner {
        require(_ticketId < ticketCount, "Ticket does not exist");

        Ticket storage ticket = tickets[_ticketId];
        require(!ticket.completed, "Ticket already completed");

        ticket.completed = true;
        ticket.creator.transfer(ticket.reward);

        emit TicketCompleted(_ticketId, ticket.creator, ticket.reward);
    }

    function getTicket(uint256 _ticketId) external view returns (string memory, uint256, address, bool) {
        require(_ticketId < ticketCount, "Ticket does not exist");

        Ticket storage ticket = tickets[_ticketId];
        return (ticket.description, ticket.reward, ticket.creator, ticket.completed);
    }
    
    function getTicketCount() external view returns (uint256) {
        return ticketCount;
    }

    function getProjectInfo() external view returns(string memory, string memory, address, uint256) {
        return (name, description, owner, ticketCount);
    }
}