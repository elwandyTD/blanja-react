export const isLogin = (auth, history) => {
	if (auth.data.data) {
		history.push({
			pathname: '/'
		})
	}
}