const News = () => {
    const news = [
        {intro: 'We will be on stage at Galaxy CG "Carnival Tonight', date: '2023-06-19'},
        {intro: 'I was in charge of the design of Japanese sake "Za"', date: '2023-04-16'},
        {intro: '5/3-5/9 I will hold a solo exhibition at Shinjuku Isetan', date: '2023-04-06'},
        {intro: 'MikaPIkazo\'s solo exhibition will exhibit collaborative works', date: '2022-12-05'},
        {intro: 'Solo exhibition "Evening CAlm" 11/29-12/11', date: '2022-12-01'},
        {intro: 'O did "design of chnage" artwork', date: '2022-10-18'},
        {intro: '10/5~10/10 Kobe Daimaru Exhibition', date: '2022-10-07'},
        {intro: 'PUblished in Monthly Art Collectors', date: '2022-08-14'},
        {intro: 'Fuji Pacific Musicc 55th Anniversary Project', date: '2022-06-05'},
        {intro: 'Collaboration with Aflax', date: '2022-06-05'},
        {intro: 'Shinjuku Isetan solo exhibition', date: '2022-06-05'},
        {intro: 'adobe max', date: '2022-01-23'},
        {intro: '"Hatena tea" design help', date: '2021-12-30'},
        {intro: 'I drew a frontispiece for the monthly magazine "HAIR MODE"', date: '2021-11-14'},
        {intro: 'What a beauty by Eiji Kotoge', date: '2021-11-14'},
        {intro: 'Solo exhibition in Osake "Night One Night 5/1~5/12', date: '2021-04-27'},
        {intro: 'Matsuya Ginza Spring Art Festa', date: '2021-04-07'},
        {intro: 'Published in Monthly Art Collectors', date: '2021-03-02'},
        {intro: 'Opened portfolio site', date: '2021-01-31'},
        {intro: 'Published in Monthly Art Collectors', date: '2020-02028'},
    ]

    return (
        <div className="w-full h-max pl-32 p-16">
            <h1 className="text-6xl">NEWS</h1>

            <div>
                <ul>
                    {news.map(item => {
                        return(
                            <li className="my-4">{item.intro}</li>
                        )}
                    )}
                    
                </ul>
            </div>
        </div>
    )
}

export default News