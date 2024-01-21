describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update Server Table on updateServerTable()', function () {
    allServers = {"server1":"Alice"}
    updateServerTable();

    expect(serverTbody.innerHTML).not.toEqual("");
   
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
