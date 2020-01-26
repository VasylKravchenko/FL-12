const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function buildTree(root, arr) {
  let mkUl = document.createElement('ul');
  let mkLi = document.createElement('li');
  root = root.append(mkUl);

  arr.forEach(el => {
    if(el.folder) {
      el = mkLi;
      el.classList.add('folder');
      el.innerHTML = ``
      el.append(mkUl);
    }
  });
}

buildTree(rootNode, structure);
