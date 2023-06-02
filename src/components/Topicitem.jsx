import { Link } from 'react-router-dom';

const Topicitem = ({ data }) => {
    const handleFetchDataById = (id) => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('selectedShow', JSON.stringify(data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div>
            <div className='bg-gray-100 p-6 rounded shadow-lg'>
                <img
                    className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-70'
                    src={data.show?.image?.medium}
                    alt=''
                />
                <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{data.show.name}</p>
                <Link
                    to={`/shows/${data.show.id}`}
                    onClick={() => handleFetchDataById(data.show.id)}
                    className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    Start Practice
                </Link>
            </div>
        </div>
    );
};

export default Topicitem;