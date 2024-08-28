import { Edit, Search } from "lucide-react";
import { TableCell, TableRow } from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";

export default function PunchTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant="outline" size="sm">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes da batida</span>
          </Button>
        </TableCell>
        <TableCell>24/07/2024</TableCell>
        <TableCell>TER</TableCell>
        <TableCell>07:12</TableCell>
        <TableCell>11:30</TableCell>
        <TableCell>13:00</TableCell>
        <TableCell>17:00</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>08:18</TableCell>
        <TableCell>00:20</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="sm">
            <Edit className="mr-2 h-3 w-3" />
            Justificar
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
