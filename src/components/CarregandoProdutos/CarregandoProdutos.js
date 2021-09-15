import React from 'react';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import './CarregandoProdutos.scss';

export default function CarregandoProdutos(props) {
	return (
		<>
			{props.loading && (
				<div className="loading">
					<div className="loading">
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
						<div className="singleSkeleton">
							<SkeletonLoader height="350px" />
							<SkeletonLoader />
							<SkeletonLoader width="80%" />
							<SkeletonLoader />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
