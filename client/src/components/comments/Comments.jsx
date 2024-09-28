
import { Link } from "react-router-dom";
import styles from "./comments.module.css";



const Comments = () => {

  const data = [
    {user : {name : 'Kamlesh8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1726849736/zyi8lanf7mkd72iymnnj.jpg'} , createdAt : '12/05/2024' , desc : 'दुनिया के सारे सुख एक तरफ और मोदीजी को देखने और सुनने का सुख एक तरफ। Most handsom, Most charming, Most Loveble pm Modi ji ❤❤❤❤❤❤❤❤❤❤❤🚩🚩🚩🚩🚩❤❤❤❤❤❤❤'},
    {user : {name : 'Deepak8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1725088740/nhrziorngzy9mmugyttl.png'} , createdAt : '12/05/2024' , desc : 'This news is really very interesting and very informative. I really enjoyed reading it. and I would recommend it to everyone. I would like to share my thoughts on this topic with you.'},
    {user : {name : 'Dheeraj8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1725082562/gldru3x48yzwsvaat3ny.png'} , createdAt : '12/05/2024' , desc : '❤❤❤❤🎉तीसरी बार सीएम श्री नायब सैनी जी के नेतृत्व में तीसरी बार भाजपा की दमदार ईमानदार सरकार ❤❤❤❤🎉।❤❤❤❤🎉कमल खिलेगा ❤❤❤❤🎉।❤❤❤❤🎉जय श्री राम ❤❤❤❤🎉।❤❤❤❤🎉नमो नमो भारत वंदेमातरम ❤❤❤❤🎉।.'},
    {user : {name : 'Kishan8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1725081981/algauiasulm4vv50jwwq.png'} , createdAt : '12/05/2024' , desc : 'This news is really very interesting and very informative. जय जय श्री राम जय श्री बजरंग मोदी जी को कोटि कोटि प्रणाम विकसित भारत मोदी जी तुम आगे बढ़ो हम सभी आपके साथ है'},
    {user : {name : 'Krishna8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1725081682/szaemqibzed9rxdcgrku.png'} , createdAt : '12/05/2024' , desc : 'Dear Haryana people, think and vote for development with full majority to one party admn. Keep away corrupt candidates. 🌹🌹'},
    
    {user : {name : 'Nitish8603416388@', age : 45 , image : 'https://res.cloudinary.com/photouploading/image/upload/v1725089094/zoggl6bmnnavhos6wizd.png'} , createdAt : '12/05/2024' , desc : 'भारत वासियों मै बनारसी हूँ अगर कांग्रेस की कहीं भी सरकार बनेगी तो वह राज्य निश्चित ही पाकिस्तान बन जायेगा जय श्री राम 👏❤️💐🙏'},
    
  ];
  const status = "authenticated";
  const isLoading = false;
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            
          />
          <button className={styles.button} >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item , i) => (
              <div className='my-[5rem]' key={i}>
                <div className='flex gap-[5rem] w-full'>
                  <div id="user" className="flex w-full gap-[1rem] items-start">
                  {item.user.image && (
                    <div id="img" className="min-w-[6rem]   min-h-[6rem] ">
                    <img
                  src={item?.user?.image}
                  alt=""
                  className="w-[5rem] h-[5rem] rounded-full"
                  />
                </div>
              )}
              <div >
                <span className="font-[600] text-[1.8rem]" >{item.user.name}</span>
                <p className="font-[500] text-[1.4rem] text-[#484747d7]" >{item.desc}</p>
              </div>
                  </div>
                    
                  <div id="date" className="ml-auto">
                   <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                
              </div>
            ))}
      </div>
    </div>
  );
};


export default Comments;
