// Cars Dashboard — simple CRUD demo (GET, POST, PUT, DELETE)

const API_URL = 'https://6a984f9b7160beda2292e15c.mockapi.io/cars';

const carsEl = document.getElementById('cars');
const statusEl = document.getElementById('status');
const formEl = document.getElementById('car-form');
const formTitleEl = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

const idInput = document.getElementById('car-id');
const nameInput = document.getElementById('name');
const manufacturerInput = document.getElementById('manufacturer');
const yearInput = document.getElementById('year');
const priceInput = document.getElementById('priceUSD');

function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = `status ${type}`;
    statusEl.hidden = false;
}

function hideStatus() {
    statusEl.hidden = true;
}

// ---------- GET ----------
async function getCars() {
    showStatus('Loading cars...', 'loading');
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const cars = await response.json();
        renderCars(cars);
        hideStatus();
    } catch (error) {
        console.error('Failed to load cars:', error);
        showStatus('Failed to load cars. Please try again later.', 'error');
    }
}

// ---------- POST ----------
async function createCar(car) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(car),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}

// ---------- PUT ----------
async function updateCar(id, car) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}

// ---------- DELETE ----------
async function deleteCar(id) {

    try {
        const response = await fetch(`https://6a984f9b7160beda2292e15c.mockapi.io/cars/${id}`, {
            method: 'DELETE',
        });
                console.log(`Car with ${API_URL}/${id} deleted successfully.`);

       if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

    }
    catch (error) {

        console.error('Failed to delete car:', error);
    }
  
}

// ---------- Rendering ----------
function renderCars(cars) {
    carsEl.innerHTML = cars.map(car => `
        <div class="car-card">
            <span class="year-badge">${car.year}</span>
            <h3>${car.name}</h3>
            <p class="manufacturer">${car.manufacturer}</p>
            <p class="price">$${Number(car.priceUSD).toLocaleString()}</p>
            <div class="car-actions">
                <button class="edit-btn" data-id="${car.id}">Edit</button>
                <button class="delete-btn" data-id="${car.id}">Delete</button>
            </div>
        </div>
    `).join('');
}

function readForm() {
    return {
        name: nameInput.value.trim(),
        manufacturer: manufacturerInput.value.trim(),
        year: Number(yearInput.value),
        priceUSD: Number(priceInput.value),
    };
}

function resetForm() {
    formEl.reset();
    idInput.value = '';
    formTitleEl.textContent = 'Add a new car';
    submitBtn.textContent = 'Add car';
    cancelBtn.hidden = true;
}

function enterEditMode(car) {
    idInput.value = car.id;
    nameInput.value = car.name;
    manufacturerInput.value = car.manufacturer;
    yearInput.value = car.year;
    priceInput.value = car.priceUSD;

    formTitleEl.textContent = `Edit: ${car.name}`;
    submitBtn.textContent = 'Save changes';
    cancelBtn.hidden = false;
    nameInput.focus();
}

// ---------- Event handlers ----------

formEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const car = readForm();
    const id = idInput.value;

    try {
        if (id) {
            await updateCar(id, car);
        } else {
            await createCar(car);
        }
        resetForm();
        getCars();
    } catch (error) {
        console.error('Failed to save car:', error);
        showStatus('Failed to save car. Please try again.', 'error');
    }
});

cancelBtn.addEventListener('click', resetForm);

document.getElementById('refresh-btn').addEventListener('click', getCars);

carsEl.addEventListener('click', async (event) => {
    const id = event.target.dataset.id;
    if (!id) return;

    if (event.target.classList.contains('delete-btn')) {
        const confirmed = confirm('Delete this car?');
        if (!confirmed) return;

        try {
            await deleteCar(id);
            getCars();
        } catch (error) {
            console.error('Failed to delete car:', error);
            showStatus('Failed to delete car. Please try again.', 'error');
        }
        return;
    }

    if (event.target.classList.contains('edit-btn')) {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            const car = await response.json();
            enterEditMode(car);
        } catch (error) {
            console.error('Failed to load car:', error);
            showStatus('Failed to load car for editing.', 'error');
        }
    }
});

getCars();




