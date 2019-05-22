class GitHub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const data = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${githubController.getClientID()}&client_secret=${githubController.getClientSecret()}`);

    const profile = await data.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
}
}

const githubController = (function() {
  
  const clientId = '267190059fef0191f4c0';
  const clientSecret = '892afabf5d45a125e37381738b01f46f43769096';

  return {
    getClientID: function() {
      return clientId;
    },
    getClientSecret: function() {
      return clientSecret;
    }
  }
})()