import { Card, CardContent, CardHeader, CardTitle } from "@/component/core/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/component/core/table";

export default function TablePage() {
  return (
    <Card>
      <CardHeader className="p-6">
        <CardTitle>Top Income</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="whitespace-nowrap bg-gray-100">
              <TableHead>Package</TableHead>
              <TableHead>Invoice date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className="font-medium">Free Package</span> <br /> $0.00
                </TableCell>
                <TableCell>Jan 13,2023</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>See | Edit | Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
