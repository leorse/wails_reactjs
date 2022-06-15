import Speaker from './Speaker'

function SpeakersList({data}:any) {
    return (
        <div className="container speakers-list">
            <div className="row">
                {
                    data.map(function (speaker:any) {
                        return (
                            <Speaker key={speaker.id} speaker={speaker} />
                        );
                    })
                };
            </div>
        </div>
    )
}

export default SpeakersList;