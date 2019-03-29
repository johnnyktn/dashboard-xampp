async static void PostRequest() {
    var client = new HttpClient();
    client.BaseAddress = new Uri("https://api.vasttrafik.se");
    var request = new HttpRequestMessage(HttpMethod.Post, "/token");

    string credentials = "XXXXXXWkxw0oVS5xDrcO6qZsAp0a" + "XXXXXXe00_hn0STj1w4asDwixdMa";
    var plainTextBytes = Encoding.UTF8.GetBytes(credentials);

    string encodedCrentedials = Convert.ToBase64String(plainTextBytes);

    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", encodedCrentedials);

    var formData = new List<KeyValuePair<string, string>>();
    formData.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
    formData.Add(new KeyValuePair<string, string>("scope", "XXXXXXWkxw0oVS5xDrcO6qZsAp0a"));

    request.Content = new FormUrlEncodedContent(formData);

    var response = await client.SendAsync(request);
    var mycontentres = await response.Content.ReadAsByteArrayAsync();
    var responseBody = Encoding.Default.GetString(mycontentres);

    Console.WriteLine(responseBody);
    Console.ReadKey();
}

