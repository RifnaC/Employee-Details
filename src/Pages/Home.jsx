import {  Stack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


export default function Home() {

  return (
    <Stack alignItems={"center"} justify={"center"} w={"100%"} h={"100vh"}>
        <Stack>
        <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Role Active</Th>
                    <Th>Status</Th>
                    <Th>Designation</Th>
                    <Th>Date of Birth</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Rifna</Td>
                </Tr>
            </Tbody>
            </Table>
        </Stack>

    </Stack>
  )
}
