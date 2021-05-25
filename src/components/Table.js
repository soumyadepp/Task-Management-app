import { useTable } from 'react-table';

import React from 'react'

export const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns, data
    });
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroups => (
                        <tr {..headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => {
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            })}
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}
