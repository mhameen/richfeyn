export const getUser = async () => {
    let data = {};
    await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (!documentSnapshot.exists) {
          data = null;
        } else {
          data = documentSnapshot.data();
          data.id = auth().currentUser.uid;
          data.birthday = data.birthday.toDate();
          data.initials = data.displayName
            .split(' ')
            .map((n, index) => {
              if (index < 2) {
                return n[0];
              }
            })
            .join('');
        }
      });
    return data;
  };
  