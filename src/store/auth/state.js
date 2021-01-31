export default function () {
  return {
    token: localStorage.getItem('token') || null,
    user:null
  }
}
