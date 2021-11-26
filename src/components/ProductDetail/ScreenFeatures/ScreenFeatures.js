import { useMemo } from 'react';

const ScreenFeatures = ({selectedFeature}) => {
    const heartBeat = useMemo(() => Math.floor(Math.random()*60)+60, []);
    const date = new Date();
    let hourData = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    let minutesData = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

    return (
        <div className='screen-features'>
            {selectedFeature === 'heartBeat' && (
                <div className='heart-beat-data'>
                    <i className="fas fa-heartbeat"></i>
                    <p>{heartBeat}</p>
                    {/* span */}
                </div>
            )}
            {selectedFeature === 'hour' && (
                <div className='hour-data'>
                <p>{hourData}:{minutesData}</p>
                </div>
            )}
        </div>
    )
}

export default ScreenFeatures;
