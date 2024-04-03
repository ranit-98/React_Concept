import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [starred, setStarred] = useState([]);
    const [Subscription,setSubscription] = useState([]);
    const [repos,setRepos]=useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`https://api.github.com/users/${id}`);
                setUser(userResponse.data);

                const starredResponse = await axios.get(`https://api.github.com/users/${id}/starred`);
                setStarred(starredResponse.data);

                const subscriptions = await axios.get(`https://api.github.com/users/${id}/subscriptions`);
                setSubscription(subscriptions.data);
                
                const repository=await axios.get(`https://api.github.com/users/${id}/repos`)
                setRepos(repository.data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);
console.log(user);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <h1>User Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <img src={user.avatar_url} alt="User Avatar" style={{borderRadius:"50%" }} />
                </div>
                <div className="col-md-6 p-3 align-self-center">
                    
                        <h6 className="list-group-item">Username: {user.login} {user?.name}</h6>
                        <h6 className="list-group-item">Profile URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></h6>
                        <h6 className="list-group-item">Followers: {user.followers}</h6>
                        <h6 className="list-group-item">Following: {user.following}</h6>
                        <h6 className="list-group-item">Public Gists: {user.public_gists}</h6>
                    
                    {/*Starred area start*/}
                    <div className="mt-4">
                        <h6>Starred Repositories:</h6>
                        <ul>
                            {starred.map(repo => (
                                <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/*Starred area end*/}

                    {/*Subscription area start*/}
                    <div className="mt-4">
                        <h6>Subscriptions:</h6>
                        <ul>
                            {Subscription.map(subs => (
                                <li key={subs.id}><a href={subs.html_url} target="_blank" rel="noopener noreferrer">{subs.full_name}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/*Subscription area end*/}

                   {/* Github Repo area start */}
                   <div className="mt-4">
                        <h6>Github Repo:</h6>
                        <ul>
                            {repos.map(repo => (
                              
                                <li key={repo.id}><a href={repo.archive_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a></li>
                                ,console.log(repo.full_name)
                           ))}
                        </ul>
                    </div>
                   
                   {/* Github Repo area end */}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
