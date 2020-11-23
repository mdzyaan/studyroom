export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export const timestampToReadableDate = (timestamp) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct', 'Nov','Dec'];
    let d = new Date(timestamp);
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${date} ${month} ${year}`
  }