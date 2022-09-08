const fs = require('fs');

const { argv } = require('process');
const file = 'employees.json';
const action = argv.splice(2)[0];

// Dosya oluşturma ve veri ekleme
if (action === 'create') {
    const data = { "name": "Employee 1 Name", "salary": 2000 };
    fs.writeFile(file, JSON.stringify(data), (err) => {
        if (err) console.log(err);
        else console.log('Dosya başarı ile oluşturuldu ve veriler yazıldı.');
    });
}

// Dosya okuma
else if (action === 'read') {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) console.log(err);
        else console.log('Veriler başarı ile okundu.\n', data);
    });
}

// Dosya güncelleme

else if (action === 'update') {
    const newData = { "name": "Employee 2 Name", "salary": 2500 };
    fs.writeFile(file, JSON.stringify(newData), 'utf8', (err) => {
        if (err) console.log(err);
        else console.log('Veriler başarı ile güncellendi.');
    });
}

// Dosya Silme
else if (action === 'delete') {
    fs.unlink(file, (err) => {
        if (err) console.log(err);
        else console.log('Dosya başarı ile silindi.');
    });
}

// İşlem yok
else console.log("İşlem yok.");