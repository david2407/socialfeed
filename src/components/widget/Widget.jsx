import React, { useState, useEffect } from "react";
import { Post } from "../post/Post";
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Widget.scss";
import { useSelector, useDispatch } from "react-redux";
import { setEvents, updateEvents } from "../../store/events/eventSlice";

export function existParameter(url) {
  return url === "" ? true : false;
}

const Widget = ({ URL, limit, updateInterval }) => {
  const [hasMore, setHasMores] = useState(true);
  const [nLimit, setNLimit] = useState(limit);

  const eventList = useSelector((state) => state.event.value);
  const dispatch = useDispatch();

  const callApi = () => {
    fetch(`${URL}?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => dispatch(setEvents([...res])))
      .catch((error) => console.log(error));
  };

  const fetchData = () => {
    fetch(
      `${URL}?limit=${limit}&start_id=${eventList[Number(nLimit - 1)].id_str}`
    )
      .then((res) => res.json())
      .then((res) => {
        res.length > 0 ? setHasMores(true) : setHasMores(false);
        dispatch(updateEvents(res));
      })
      .catch((error) => console.log(error));
    setNLimit((old) => old + limit);
  };

  useEffect(() => {
    callApi();
    const interval = setInterval(() => callApi(), updateInterval);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="widget">
      {/* <div className='widget__title'>Post list</div> */}

      <div className="widget__list">
        <h1>Post List</h1>
        {existParameter(URL) && <div>URL not privided</div>}
        {eventList && (
          <InfiniteScroll
            dataLength={eventList.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {eventList.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Widget;
