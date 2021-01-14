import firebase from '~/plugins/services/firebaseConfig'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  fetchWorks({ commit }) {
    let workList = []
    db.collection('Portfolio')
      .doc('Ismail')
      .collection('My Works')
      .get()
      .then((works) => {
        works.forEach((work) => {
          workList.push(work.data())
        })
      }).then(() => {
        commit("setWorks", workList);
      })
  },
  fetchProfile({ commit }) {
    db.collection('Portfolio')
      .doc('Ismail')
      .get()
      .then((snap) => {
        const profile = {
          name: snap.data().name,
          img: snap.data().img_url
        }
        commit("setProfile", profile);
      })
  }
}