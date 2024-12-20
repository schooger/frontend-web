import { Table } from "@mantine/core"

export default function View() {
  console.log('classes.view')
  const data = [
    { name: 'Class A', level: 1, students: 24 },
    { name: 'Class B', level: 1, students: 24 },
    { name: 'Class A', level: 2, students: 21 },
    { name: 'Class B', level: 2, students: 22 },
    { name: 'Class A', level: 3, students: 22 },
    { name: 'Class B', level: 3, students: 23 },
    { name: 'Class A', level: 4, students: 14 },
    { name: 'Class B', level: 4, students: 15 },
    { name: 'Class A', level: 5, students: 19 },
    { name: 'Class B', level: 5, students: 18 },
    { name: 'Class A', level: 6, students: 17 },
    { name: 'Class B', level: 6, students: 18 },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full text-center pt-[8rem]">
      <h1 className="text-2xl font-bold">Classes</h1>

      <div className="w-[28rem] max-w-[100%]">
        <Table
        striped
          highlightOnHover
          withColumnBorders
          withRowBorders
          className="font-semibold"
          
        >
          <Table.Thead>
            <Table.Tr className="border-[#eee]">
              <Table.Th className="text-center bg-white border-[#eee]">name</Table.Th>
              <Table.Th className="text-center bg-white border-[#eee]">level</Table.Th>
              <Table.Th className="text-center bg-white border-[#eee]">students</Table.Th>
              <Table.Th className=""></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {
              data.map((item, i) => (
                <Table.Tr 
                key={`class-${i}`} 
                className="bg-white border-[#eee]"
                >
                  <Table.Td className="border-[#eee]">{item.name}</Table.Td>
                  <Table.Td className="border-[#eee]">{item.level}</Table.Td>
                  <Table.Td className="border-[#eee]">{item.students}</Table.Td>
                  <Table.Td className="border-[#eee]">?</Table.Td>
                </Table.Tr>
              ))
            }
          </Table.Tbody>
        </Table>
      </div>
    </div>
  )
}