import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ButtonActionTable from "../ButtonActionTable";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";

interface ApplicantsProps {
  applicants: any;
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMNS.map((item: string, index: number) => {
            return <TableHead key={item + index}>{item}</TableHead>;
          })}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants.length !== 0 ? (
          applicants.map((item: any, index: number) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.user.name}</TableCell>
                <TableCell>
                  <ButtonActionTable url="/job-detail/1" />
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell>No Data</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Applicants;
