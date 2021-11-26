const FeaturesBtn = ({ changeSeletedFeature, selectedFeature }) => {
    
    return (
        <div className='features'>
            <h2>Features</h2>
            <div>
                <button onClick={() => changeSeletedFeature('hour')}  className={selectedFeature === 'hour'
                ? 'feature-btn selected-btn' : 'feature-btn'} type='button'>Time</button>
                <button onClick={() => changeSeletedFeature('heartBeat')}  className={selectedFeature === 'heartBeat'
                ? 'feature-btn selected-btn' : 'feature-btn'} type='button
                '>Heart Beat</button>
            </div>
        </div>
    )
}

export default FeaturesBtn;
