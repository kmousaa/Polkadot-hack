// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Project.sol";

contract ProjectFactory {
    uint256 public projectCount;
    mapping(uint256 => address) public projects;

    event ProjectCreated(uint256 projectId, address projectAddress, string name, string description, address owner);

    function createProject(string calldata _name, string calldata _description) external returns (address) {
        Project newProject = new Project(_name, _description, msg.sender);
        projects[projectCount] = address(newProject);
        emit ProjectCreated(projectCount, address(newProject), _name, _description, msg.sender);
        projectCount++;
        return address(newProject);
    }

    function getProject(uint256 _projectId) external view returns (address) {
        require(_projectId < projectCount, "Project does not exist");
        return projects[_projectId];
    }

    function getProjectCount() external view returns (uint256) {
        return projectCount;
    }
}