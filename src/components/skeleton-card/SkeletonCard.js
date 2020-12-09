import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const SkeletonCard = () => {
    return (
        <ul className="list">
            {Array(25)
                .fill()
                .map((item, index) => (
                    <li key={index}>
                        <div className="card" >
                            <div className='container'>
                                <div className='img-and-song row'>
                                    <div className='image-icon-container'>
                                        <SkeletonTheme highlightColor='pink'>
                                            <div className='artist-pic'>
                                                <Skeleton circle={true} height={40} width={40} />
                                            </div>
                                        </SkeletonTheme>
                                    </div>
                                    <SkeletonTheme highlightColor='pink'>
                                        <div className='song-info'>
                                            <p className='song-title'>
                                                <Skeleton height={10} width={150} />
                                            </p>
                                            <span className='artist-name'>
                                                <Skeleton height={10} width={100} />
                                            </span>
                                        </div>
                                    </SkeletonTheme>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default SkeletonCard;