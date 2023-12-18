"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Match } from "@/types/collection";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./columnheader";

export const columns: ColumnDef<Match>[] = [
	{
		accessorKey: "matchid",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="matchid"
			/>
		),
		cell: ({ row }) => <div>{row.getValue("matchid")}</div>,
	},
	{
		accessorKey: "matchdate",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="matchdate"
			/>
		),
		cell: ({ row }) => <div>{row.getValue("matchdate")}</div>,
	},
	{
		accessorKey: "player1",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player1"
			/>
		),
		cell: ({ row }) => <div className="text-right">{row.getValue("player1")?.playername}</div>,
	},
	{
		accessorKey: "player2",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player2"
			/>
		),
		cell: ({ row }) => <div className="text-right">{row.getValue("player2")?.playername}</div>,
	},
	{
		accessorKey: "player1goals",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player1goals"
			/>
		),
		cell: ({ row }) => <div className="text-right">{row.getValue("player1goals")}</div>,
	},
	{
		accessorKey: "player2goals",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player2goals"
			/>
		),
		cell: ({ row }) => <div className="text-right">{row.getValue("player2goals")}</div>,
	},
	{
		accessorKey: "player1owngoals",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player1owngoals"
			/>
		),
		cell: ({ row }) => <div className="text-right">{row.getValue("player1owngoals")}</div>,
	},
	{
		accessorKey: "player2owngoals",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="player2owngoals"
			/>
		),

		cell: ({ row }) => <div className="text-right">{row.getValue("player2owngoals")}</div>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const match = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(match.matchid)}>Copy match ID</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View players</DropdownMenuItem>
						<DropdownMenuItem>View match details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
console.log(columns);
