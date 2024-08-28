import { DialogTitle } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../components/ui/table";
import { Textarea } from "../../../components/ui/textarea";

export default function PunchDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Justificativa - 137e01f2-53df-42f9-945c-697e11618596</DialogTitle>
        <DialogDescription>Detalhes da justificativa</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Data</TableCell>
              <TableCell className="flex justify-end">24/07/2024</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Inconsistência
              </TableCell>
              <TableCell className="flex justify-end">08:45</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Justificativa
              </TableCell>
              <TableCell className="flex justify-end">
                Atestado - consulta médica
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Textarea
          placeholder="Texto da justificativa"
          value="Lorem ipsum dapibus lectus ac neque porttitor, proin lorem orci mauris quam praesent pellentesque"
          className="text-secondary-foreground"
          disabled
        />
      </div>
    </DialogContent>
  );
}
