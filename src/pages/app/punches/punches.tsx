import { Helmet } from "react-helmet-async";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Edit, Search, X } from "lucide-react";

export function Punches() {
  return (
    <>
      <Helmet title="Batidas" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Batidas</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Filtro" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-medium border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Dia da semana</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Normais</TableHead>
                <TableHead>Falta</TableHead>
                <TableHead>Atraso</TableHead>
                <TableHead>Ex50%</TableHead>
                <TableHead>Ex100%</TableHead>
                <TableHead>EN50%</TableHead>
                <TableHead>ExNot</TableHead>
                <TableHead>Not.</TableHead>
                <TableHead>Not. Tot.</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Edit className="mr-2 h-3 w-3" />
                    Justificar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
