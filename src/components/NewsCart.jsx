import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCart = ({ news }) => {
    // const NewsCart = ({ props = {} }) => {
    //     const { news } = props || {};

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <p className="text-sm font-semibold">{news.author.name}</p>
                    <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
                </div>
            </div>
            <h2 className="font-bold text-lg mb-2">{news.title}</h2>
            <img
                src={news.thumbnail_url}
                alt="thumbnail"
                className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-600 text-sm mb-3">{news.details.slice(0, 150)}...</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span>{news.rating.number} ({news.rating.badge})</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span>{news.total_view}</span>
                </div>
            </div>
            <button className="btn bg-base-400  w-full mt -3">Read More</button>
        </div> 
    )
};

export default NewsCart;