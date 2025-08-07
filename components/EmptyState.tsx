import Image from 'next/image';
import React from 'react';

export const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
        return (
                <section className="empty-state">
                        <div>
                                <Image src={icon} width={48} height={48} alt="Icon" />
                        </div>
                        <article>
                                <h1>{title}</h1>
                                <p>{description}</p>
                        </article>
                </section>
        );
};
