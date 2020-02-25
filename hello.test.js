const fs = require('fs');
const mock = require('mock-fs');

describe('mock-fs helloworld', function() {
  // beforeEach(function() {
  //   mock({
  //     'fake-file': 'file contents'
  //   });
  // });
  //
  // afterEach(mock.restore);

  beforeEach(async () => {
    mock({
      '/test': {
        'fake-file': 'file contents'
      }
    })
  })

  afterEach(async () => {
    mock.restore()
  })

  it('Mocking File System Sync', () => {

    const contents = fs.readFileSync('/test/fake-file', 'utf8');
    console.log(contents);
    expect(contents).toBe('file contents');
  });

  it('Mocking File System', async () => {
    await mock({
      '/test': {
        'fake-file': 'file contents'
      }
    })
    const contents = fs.readFileSync('/test/fake-file', 'utf8');
    console.log(contents);
    expect(contents).toBe('file contents');
  });
});
