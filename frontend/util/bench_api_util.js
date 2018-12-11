const fetchBenches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/benches',
  })
);

export default fetchBenches;
