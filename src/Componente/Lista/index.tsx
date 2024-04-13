import { useEffect, useState } from "react";

const Lista = () =>{

    interface Repo {
        name: string,
        description: string
    }

    const [repos, setRespo] = useState<Repo[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        fetch('https://api.github.com/users/Matheus1415/repos')
       .then(res => res.json())
       .then(data => setRespo(data))
    })

    const filteRepos = repos.length > 0 ? repos.filter(repo => repo.name.includes(search)) : [];

    return(
        <div>
            <h1>Fassa sua busca aqui</h1>
            <input 
                type="text" 
                name="search" 
                placeholder="Buscar..." 
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
            <ul>
                {search.length > 0 ?
                    (
                        filteRepos.map(repo => (
                            <li key={repo.name}>{repo.name}</li>
                        ))
                    ):(
                        repos.map(repo => (
                            <li key={repo.name}>{repo.name}</li>
                        ))
                    )                
                }
            </ul>
        </div>
    )
}

export default Lista;