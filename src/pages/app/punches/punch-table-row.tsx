import { Edit, Search } from "lucide-react";
import { TableCell, TableRow } from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import PunchDetails from "./punch-details";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";

export default function PunchTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Edit className="mr-2 h-3 w-3" />
                Justificar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Nova justificativa</DialogTitle>
              <form className="flex flex-col items-center gap-4">
                <Select defaultValue="08h30min">
                  <SelectTrigger className="h-8 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08h30min">08:40</SelectItem>
                    <SelectItem value="pending">11:45</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="11h45min">
                  <SelectTrigger className="h-8 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08h30min">08:40</SelectItem>
                    <SelectItem value="11h45min">11:45</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="medicalCertificate">
                  <SelectTrigger className="h-8 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medicalCertificate">Atestado</SelectItem>
                    <SelectItem value="training">Treinamento</SelectItem>
                    <SelectItem value="vacation">Férias</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Digite aqui..." />
                <Button type="submit">Enviar justificativa</Button>
              </form>
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes da batida</span>
              </Button>
            </DialogTrigger>

            <PunchDetails />
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
}
