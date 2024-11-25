import { Card, CardContent, CardHeader, CardTitle } from "@/component/core/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/component/core/table";

export default function TablePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Income</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="overflow-hidden rounded-lg">
          <TableHeader>
            <TableRow>
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
