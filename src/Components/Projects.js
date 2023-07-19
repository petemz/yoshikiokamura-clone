const Projects = () => {
    const projects = [
        { date: '2023', desc: 'Galaxy CG "Carnival Tonight" guest appearance' },
        { date: '2023', desc: 'Sake "Za Kura Junmai Daiginjo" Design Supervision' },
        { date: '2023', desc: '2023Skinjuju Isetan solo exhibition "Shoyo" held' },
        { date: '2022', desc: 'Participated in Mika Pikazo\'s solo exhibiton "REVENGE POP"' },
        { date: '2022', desc: 'Imperial Hotel sole exhibition "Evening Calm" @MEDEL GALLERY SHU' },
        { date: '2022', desc: 'Transformation Design Artwork' },
        { date: '2022', desc: 'Exhibited at Daimaru "D-art, Art"' },
        { date: '2022', desc: 'Monthly publication "Art Collectors' },
        { date: '2022', desc: 'Fuji Pacific Music 55th Anniversary Project' },
        { date: '2022', desc: 'BRidal jewelry shop "AFFLUX" collaboration' },
        { date: '2022', desc: '2022 Shinjuku Isetan sole exhibition "Crystal Night"' },
        { date: '2022', desc: '"Adobe Max" Main Visual Desig' },
        { date: '2021', desc: '"Hatena no Kocha" package design' },
        { date: '2021', desc: 'Monthly magazine "HAIR MODE" frontispiece' },
        { date: '2021', desc: 'Appeared in TOKYO MX "Eiji Kotage\'s What a Beauty"' },
        { date: '2020', desc: 'Published in ILLUSTRATION2020' },
        { date: '2020', desc: 'Advertisement for Gakushuin University Faculty of International Studies' },
        { date: '2019', desc: 'Particpated in product design for Korean idol JUN\'s new album' },
        { date: '2019', desc: 'I was in charge of the original soundtrack jacket for "The Rising of the Shield Hero' },
    ]

    return (
        <div className="w-full h-max pl-24 pb-14 p-3">
            <h1 className="text-7xl font-semibold">PROJECTS</h1>
            
            <ul>
                {projects.map((project, index) => {
                    return(
                        <li className="my-12 flex tracking-wide" key={index}>
                            <p className="text-zinc-400">{project.date}</p>
                            <p className="w-max pb-3 ml-7 border-b border-black">{project.desc}</p>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default Projects