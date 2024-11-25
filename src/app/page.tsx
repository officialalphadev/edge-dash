import { IconChevronBottom, IconFlashsale } from "@/asset/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/core/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/component/core/table";

export default function AppPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardContent>
              <IconFlashsale className="mb-4 size-8" />
              <h2 className="text-xl font-semibold">$3.456K</h2>
              <div className="flex items-center justify-between gap-4 text-sm">
                <p className="text-xs">Total Profit</p>
                <p className="font-medium text-green-500">
                  +12.4% <IconChevronBottom className="inline size-4 -translate-y-1 rotate-180" />
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Income</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="overflow-hidden rounded-lg">
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$250.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="overflow-hidden rounded-lg">
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>$250.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
