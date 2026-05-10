import { useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';

interface DataTableColumn {
	key: string;
	header: string;
}

interface DataTableProps {
	columns: DataTableColumn[];
	data: Array<Record<string, unknown>>;
	loading?: boolean;
	pageSize?: number;
	emptyMessage?: string;
	virtualized?: boolean;
}

function DataTable({
	columns,
	data,
	loading = false,
	pageSize = 5,
	emptyMessage = 'No results found.',
	virtualized = false,
}: DataTableProps) {
	const [page, setPage] = useState(1);

	const [sortKey, setSortKey] = useState<string | null>(null);

	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

	const parentRef = useRef<HTMLDivElement>(null);

	const totalPages = useMemo(() => {
		return Math.max(1, Math.ceil(data.length / pageSize));
	}, [data.length, pageSize]);

	const sortedData = useMemo(() => {
		if (!sortKey) return data;

		return [...data].sort((a, b) => {
			const aValue = String(a[sortKey] ?? '');
			const bValue = String(b[sortKey] ?? '');

			if (sortDirection === 'asc') {
				return aValue.localeCompare(bValue);
			}

			return bValue.localeCompare(aValue);
		});
	}, [data, sortKey, sortDirection]);

	const paginatedData = useMemo(() => {
		if (virtualized) return sortedData;

		const start = (page - 1) * pageSize;

		return sortedData.slice(start, start + pageSize);
	}, [sortedData, page, pageSize, virtualized]);

	const rowVirtualizer = useVirtualizer({
		count: paginatedData.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 60,
		overscan: 12,
	});

	return (
		<div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
			<div ref={parentRef} className={virtualized ? 'h-[650px] overflow-y-auto' : ''}>
				<table className='w-full table-fixed border-collapse'>
					<thead className='sticky top-0 z-10 bg-slate-100'>
						<tr className='border-b border-slate-200'>
							{columns.map((column) => (
								<th
									key={column.key}
									onClick={() => {
										if (sortKey === column.key) {
											setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
										} else {
											setSortKey(column.key);
											setSortDirection('asc');
										}
									}}
									className='cursor-pointer px-6 py-4 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200'>
									<div className='flex items-center justify-center gap-2'>
										{column.header}

										{sortKey === column.key &&
											(sortDirection === 'asc' ? <ArrowUp className='h-4 w-4' /> : <ArrowDown className='h-4 w-4' />)}
									</div>
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{loading ? (
							Array.from({ length: pageSize }).map((_, index) => (
								<tr key={index} className='border-b'>
									{columns.map((column) => (
										<td key={column.key} className='px-6 py-5'>
											<div className='h-4 animate-pulse rounded bg-slate-200' />
										</td>
									))}
								</tr>
							))
						) : paginatedData.length === 0 ? (
							<tr>
								<td colSpan={columns.length} className='px-6 py-16 text-center text-slate-500'>
									{emptyMessage}
								</td>
							</tr>
						) : virtualized ? (
							<tr>
								<td colSpan={columns.length} className='p-0'>
									<div
										style={{
											height: `${rowVirtualizer.getTotalSize()}px`,
											position: 'relative',
										}}>
										{rowVirtualizer.getVirtualItems().map((virtualRow) => {
											const row = paginatedData[virtualRow.index];

											return (
												<div
													key={virtualRow.key}
													className='grid border-b border-slate-100 transition hover:bg-slate-50'
													style={{
														gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
														position: 'absolute',
														top: 0,
														left: 0,
														width: '100%',
														height: `${virtualRow.size}px`,
														transform: `translateY(${virtualRow.start}px)`,
														alignItems: 'center',
													}}>
													{columns.map((column) => (
														<div key={column.key} className='truncate px-6 text-center text-sm text-slate-700'>
															{String(row[column.key] ?? '')}
														</div>
													))}
												</div>
											);
										})}
									</div>
								</td>
							</tr>
						) : (
							paginatedData.map((row, index) => (
								<tr key={index} className='border-b border-slate-100 transition hover:bg-slate-50'>
									{columns.map((column) => (
										<td key={column.key} className='px-6 py-4 text-center text-sm text-slate-700'>
											{String(row[column.key] ?? '')}
										</td>
									))}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			{!loading && !virtualized && totalPages > 1 && (
				<div className='flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4'>
					<p className='text-sm text-slate-600'>
						Page {page} of {totalPages}
					</p>

					<div className='flex items-center gap-2'>
						<button
							disabled={page === 1}
							onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
							className='rounded-lg border border-slate-200 bg-white p-2 transition hover:bg-slate-100 disabled:opacity-50'>
							<ChevronLeft className='h-4 w-4' />
						</button>

						<button
							disabled={page === totalPages}
							onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
							className='rounded-lg border border-slate-200 bg-white p-2 transition hover:bg-slate-100 disabled:opacity-50'>
							<ChevronRight className='h-4 w-4' />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default DataTable;
