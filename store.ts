import { create } from 'zustand'
import { GameData, QuestionData } from './app/_types';
import { GameData } from './app/_types/index';
import { unknown } from 'zod';

// import.meta.env.VITE_TOKEN
// import.meta.env.VITE_SOCKET_ENDPOINT

type mainStore = {
    quizData:GameData
    slideSelect:number,
    count:number,
    token: string,
    socketEndpoint: string,
    loggedIn: boolean,
    user: {
      id: string,
      user_name: string,
      token: string
    },
    profileInfo: {
      avatar:string,
      email:string,
      Id: number,
      memberSince: string,
    },
    increment: ()=>void;
    setSlide: (num:number)=>void;
    setQuizData: (data:GameData)=>void;
}


// function parseStringToObject(answers: string) {
//   return answers.split(',').map((pair: string, i: number) => {
//         const [, value] = pair.split(':');
//         return { postId: i, text: value };
//     });
// }

// function fixAnswers(GameData){
//   console.log(GameData)
//   GameData.Question.map((x,i, arr)=>{
//     arr[i].answer = parseStringToObject(x.answer)
//   })

//   return GameData
// }


export const useMainStore = create<mainStore>((set) => ({
    quizData: null,
    slideSelect:0,
    count:0,

    //Auth
    token: process.env.VITE_TOKEN || '',
    socketEndpoint: process.env.VITE_SOCKET_ENDPOINT || '',
    loggedIn: false,

    user: {
      id: "0",
      user_name: "Default",
      token: ""
    },
    profileInfo: {
      avatar: "",
      email: "",
      Id: 0,
      memberSince: "",
    },
    increment:() =>{
        set((state)=>({ count: state.count+1}))
    },
    setSlide:(num:number) =>{
      set(()=>({ slideSelect: num}))
    },
    setQuizData:(dataObj:GameData) =>{
      set(()=>({ quizData: dataObj}))
    },

}))

