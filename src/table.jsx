import React, { useEffect, useState } from "react"
import {
    TableContainer, Table, Thead, Tr, Th, Tbody, Td, Link, Button, Input, Select, HStack, transform
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useTable, useSortBy,  usePagination  } from 'react-table'

let link = "https://sheets.googleapis.com/v4/spreadsheets/1o_zDT-L57C5M-BbP8nk0puuMgN_xQf7sju1BSOCsN04/values/Sheet3!A2:E48?key=AIzaSyC4O_duMhxDlqenlf-Rs8FRfaOWNXvw8OU"

export default function TableChakra() {
    const [data, setData] = useState([])
    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch(link)
            const body = await response.json()
            let lists = body.values
            //console.log(lists)

            var values = [["no", "kdkl", "nmkl", "jmlh","link"], ...lists]; // sample values
            var dict = values.slice(1).map(row => row.reduce(function(acc, cur, i) {
                acc[values[0][i]] = cur;
                return acc;
            }, {}));
            setData(dict)
            console.log(dict)

        }
        doFetch()
    }, [])


    const columns = React.useMemo(
        () => [
            {
                Header: 'No.',
                accessor: "no", // accessor is the "key" in the data
                sortType: 'alphanumeric',
            },
            {
                Header: 'Kd K/L',
                accessor: "kdkl", // accessor is the "key" in the data
                sortType: 'alphanumeric',
                Cell: ({ cell: { value } }) => {
                    if (value === '124') {
                        return (
                            <Link href={value} isExternal>{value}</Link>

                        )
                    } else {
                        return (
                            <Link href={value} isExternal>{value}</Link>
                        )
                    }

                }
            },
            {
                Header: 'Nama KL',
                accessor: "nmkl",
                sortType: 'alphanumeric',
            },
            {
                Header: 'Jumlah Data ',
                accessor: "jmlh",
                sortType: 'alphanumeric',
            },
            {
                Header: 'Link',
                accessor: "link",
                sortType: 'basic',
                Cell: props => <Link href={props.value} isExternal> klik di sini <ExternalLinkIcon mx='2px' /></Link>
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2 },
        },
        useSortBy,
        usePagination,

    );

    return (
        <TableContainer>
        <Table marginBottom={5} {...getTableProps()} /*style={{ border: 'solid 1px blue' }} */>
            <Thead>
            {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}
                    style={{
                        textTransform: 'capitalize'
                }}>
                    {headerGroup.headers.map(column => (
                        <Th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            style={{
                                // borderBottom: 'solid 3px red',
                                // background: 'aliceblue',
                                // color: 'black',
                                 fontSize: '18px',
                                 fontWeight: 'normal',
                                 textTransform: 'capitalize'
                            }}

                        >
                            {column.render('Header')}
                            <span>
                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                            </span>
                        </Th>
                    ))}
                </Tr>
            ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <Tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <Td
                                    {...cell.getCellProps()}
                                    style={{
                                        // padding: '10px',
                                        // border: 'solid 1px gray',
                                        fontSize: '16px'
                                    }}
                                >
                                    {cell.render('Cell')}
                                </Td>
                            )
                        })}
                    </Tr>
                )
            })}
            </Tbody>
        </Table>
        </TableContainer>

    )
}


//console.log(dict)
//
// const data = React.useMemo(
//     () => [
//         {
//             col0: 1,
//             col1: '056',
//             col2: 'Kementerian ATR BPN',
//             col3 : '24',
//             link : 'link'
//         },
//         {
//             col0: 2,
//             col1: '065',
//             col2: 'Kementerian Investasi',
//             col3 : '23',
//             link : 'link'
//         },
//         {
//             col0: 3,
//             col1: '029',
//             col2: 'Kementerian Lingkungan Hidup dan Ketuhanan',
//             col3 : '22',
//             link : "https://stackoverflow.com/questions/64801742/react-table-make-one-cell-a-link"
//         },
//         {
//             col0: 4,
//             col1: '099',
//             col2: 'Kementerian Lingkungan Hidup dan Ketuhanan',
//             col3 : '111',
//             link : "https://stackoverflow.com/questions/64801742/react-table-make-one-cell-a-link"
//         },
//         {
//             col0: 5,
//             col1: '123',
//             col2: 'Kementerian Lingkungan Hidup dan Ketuhanan',
//             col3 : '123',
//             link : "https://simaspaten.kemenkeu.go.id"
//         },
//         {
//             col0: 6,
//             col1: '124',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 7,
//             col1: '124',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 8,
//             col1: '124',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 9,
//             col1: '124',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 10,
//             col1: '14',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 11,
//             col1: '14',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//         {
//             col0: 12,
//             col1: '14',
//             col2: 'BRIN Megawatt',
//             col3 : '113\n',
//             link : "https://docs.google.com/spreadsheets/d/1dfVd8CDGvWVdQaE9TWROsBcVym9wE76GXBia0lJMKIA/edit#gid=0"
//         },
//     ],
//     []
// )