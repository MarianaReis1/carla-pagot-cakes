export default function FullWidthImageText(){
    // TODO: add logic to pull/fetch the data from prismic

    const data = {
        title: 'Test',
        description: 'Hello Carla Pagot',
        img: './img/logo.png'
    }

    return (
        <section>
            <img></img>
            <div>
                <h1>
                    { data.title }
                </h1>
                <p>
                    { data.description }
                </p>
            </div>
        </section>
    )
}