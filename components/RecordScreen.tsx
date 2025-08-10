'use client';
import { ICONS } from '@/constants';
import { useScreenRecording } from '@/lib/hooks/useScreenRecording';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

export const RecordScreen = () => {
        const router = useRouter();
        const [isOpen, setIsOpen] = useState(false);
        const videoRef = useRef<HTMLVideoElement>(null);
        const {
                isRecording,
                recordedBlob,
                recordedVideoUrl,
                recordingDuration,
                startRecording,
                stopRecording,
                resetRecording,
        } = useScreenRecording();
        const closeModal = () => {
                setIsOpen(false);
                resetRecording();
        };

        const handleStartRecording = async () => {
                await startRecording();
                setIsOpen(false);
        };

        const recordAgain = async () => {
                resetRecording();
                await startRecording();
                if (recordedVideoUrl && videoRef.current) {
                        videoRef.current.src = recordedVideoUrl;
                }
        };

        const goToUpload = () => {
                if (!recordedBlob) return;
                const url = URL.createObjectURL(recordedBlob);

                sessionStorage.setItem(
                        'recordedVideo',
                        JSON.stringify({
                                url,
                                name: 'screen-recording.webm',
                                type: recordedBlob.type,
                                size: recordedBlob.size,
                                duration: recordingDuration || 0,
                        }),
                );
                router.push('/upload');
                closeModal();
        };
        return (
                <div className="record">
                        <button className="primary-btn" onClick={() => setIsOpen(true)}>
                                <Image src={ICONS.record} alt="Record" width={16} height={16} />
                                <span>Record a video</span>
                        </button>
                        {isOpen && (
                                <section className="dialog">
                                        <div className="overlay-record" onClick={closeModal} />
                                        <div className="dialog-content">
                                                <figure>
                                                        <h2>Screen Recording</h2>
                                                        <button>
                                                                <Image
                                                                        src={ICONS.close}
                                                                        alt="Close"
                                                                        width={20}
                                                                        height={20}
                                                                />
                                                        </button>
                                                </figure>
                                                <section>
                                                        {isRecording ? (
                                                                <article>
                                                                        <div />
                                                                        <span>Recording in progress</span>
                                                                </article>
                                                        ) : recordedVideoUrl ? (
                                                                <video ref={videoRef} src={recordedVideoUrl} controls />
                                                        ) : (
                                                                <p>
                                                                        Click the button below to start recording your
                                                                        screen.
                                                                </p>
                                                        )}
                                                </section>
                                                <div className="record-box">
                                                        {!isRecording && !recordedVideoUrl && (
                                                                <button
                                                                        className="primary-btn"
                                                                        onClick={handleStartRecording}
                                                                >
                                                                        <Image
                                                                                src={ICONS.record}
                                                                                alt="Start Recording"
                                                                                width={16}
                                                                                height={16}
                                                                        />
                                                                        <span>Start Recording</span>
                                                                </button>
                                                        )}
                                                        {isRecording && (
                                                                <button className="primary-btn" onClick={stopRecording}>
                                                                        <Image
                                                                                src={ICONS.record}
                                                                                alt="Stop Recording"
                                                                                width={16}
                                                                                height={16}
                                                                        />
                                                                        <span>Stop Recording</span>
                                                                </button>
                                                        )}
                                                        {recordedVideoUrl && (
                                                                <>
                                                                        <button
                                                                                className="primary-btn"
                                                                                onClick={goToUpload}
                                                                        >
                                                                                <Image
                                                                                        src={ICONS.upload}
                                                                                        alt="Upload"
                                                                                        width={16}
                                                                                        height={16}
                                                                                />
                                                                                <span>Continue to Upload Video</span>
                                                                        </button>
                                                                        <button
                                                                                className="primary-btn"
                                                                                onClick={recordAgain}
                                                                        >
                                                                                <Image
                                                                                        src={ICONS.record}
                                                                                        alt="Record Again"
                                                                                        width={16}
                                                                                        height={16}
                                                                                />
                                                                                <span>Record Again</span>
                                                                        </button>
                                                                </>
                                                        )}
                                                </div>
                                        </div>
                                </section>
                        )}
                </div>
        );
};
