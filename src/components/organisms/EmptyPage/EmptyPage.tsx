import { FC, ReactNode } from 'react';

type TutorialItem = {
	title: string;
	imageUrl?: string;
	onClick?: () => void;
};

interface EmptyStateCardItem {
	icon?: ReactNode;
	heading?: string;
	description?: string;
	buttonLabel?: string;
	buttonAction?: () => void;
}

interface Props {
	heading?: string;
	addButtonLabel?: string;
	emptyStateCard?: EmptyStateCardItem;
	tutorials?: TutorialItem[];
}

const EmptyPage: FC<Props> = ({ heading, emptyStateCard, tutorials }) => {
	const card = emptyStateCard;

	return (
		<div className='p-6'>
			<h1 className='text-3xl font-bold mb-6'>{heading}</h1>

			<div className='border rounded-lg h-[320px] flex flex-col items-center justify-center bg-gray-50'>
				{card?.heading && <h2 className='text-2xl font-semibold mb-3'>{card.heading}</h2>}

				{card?.description && <p className='text-gray-500 mb-5 text-center max-w-md'>{card.description}</p>}

				{card?.buttonLabel && (
					<button onClick={card.buttonAction} className='border px-4 py-2 rounded-md hover:bg-gray-100'>
						{card.buttonLabel}
					</button>
				)}
			</div>

			<div className='grid grid-cols-3 gap-4 mt-8'>
				{tutorials?.map((item, index) => (
					<div key={index} className='border rounded-lg overflow-hidden bg-white'>
						{item.imageUrl && <img src={item.imageUrl} alt={item.title} className='h-32 w-full object-cover' />}

						<div className='p-4'>
							<h3 className='font-medium'>{item.title}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmptyPage;
