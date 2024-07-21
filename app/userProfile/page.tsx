"use client"

import React from "react";
import {Button, Card, CardBody, Input, Link, Pagination, User, getKeyValue} from "@nextui-org/react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import {users} from "./data";


  
  const columns = [
    {
      key: "purchase",
      label: "PURCHASE",
    },
    {
      key: "story",
      label: "STORY",
    },
    {
      key: "task",
      label: "TASK",
    },
    {
        key: "cost",
        label: "COST",
      },
  ];


export default function Profile() {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 8;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    return (
        <div className="flex items-center justify-center h-screen ">
            <Card className="w-3/4 p-1 h-3/4 flex-col align-baseline">
                <CardBody className="w-max h-max m-5 flex-row p-5">
                    <User classNames={{"name": "text-2xl","description":"text-2xl"}}
                        name="Jane Doe"
                        description="WalletID: AB2|000|234|10283"
                        avatarProps={{
                            src: ""
                        }}
                    />
                </CardBody>
                
                <CardBody>
                    <h1 className="p-2">Transactions</h1>
                    <Table 
                        color={"primary"}
                        selectionMode="single" 
                        defaultSelectedKeys={["2"]} 
                        aria-label="Example table with client side pagination"
                        bottomContent={
                            <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                            </div>
                        }
                        classNames={{
                            wrapper: "min-h-[222px]",
                        }}
                        >
                        <TableHeader>
                            <TableColumn key="purchase">PURCHASE</TableColumn>
                            <TableColumn key="story">STORY</TableColumn>
                            <TableColumn key="task">TASK</TableColumn>
                            <TableColumn key="cost">COST</TableColumn>
                        </TableHeader>
                        <TableBody items={items}>
                            {(item) => (
                            <TableRow key={item.purchase}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}    