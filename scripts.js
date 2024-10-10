"use strict";

let viewedCount = 0;
let removeMode = false;

const newArtworks = [
    { title: "The Scream", artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
];

// function to update viewed counter
function updateCounter() {
    document.getElementById('counter').textContent = `Artworks Viewed: ${viewedCount}`;
}

// function to handle art panel clicks
function handlePanelClick(event) {
    if (removeMode) {
        event.currentTarget.remove();
    } else if (!event.currentTarget.classList.contains('viewed')) {
        event.currentTarget.classList.add('viewed');
        viewedCount++;
        updateCounter();
    }
}

// function to reset gallery
function resetGallery() {
    const panels = document.querySelectorAll('.art-panel');
    panels.forEach(panel => {
        panel.classList.remove('viewed');
    });
    viewedCount = 0;
    updateCounter();
}

// function to add new artwork
function addNewArtwork() {
    const randomArt = newArtworks[Math.floor(Math.random() * newArtworks.length)];
    const artGrid = document.querySelector('.art-grid');

    const newPanel = document.createElement('div');
    newPanel.classList.add('art-panel');
    newPanel.innerHTML = `
        <img src="${randomArt.img}" alt="${randomArt.title}">
        <p>${randomArt.title} by ${randomArt.artist}</p>
    `;
    newPanel.addEventListener('click', handlePanelClick);
    artGrid.appendChild(newPanel);
}

// function to toggle remove mode/button
function toggleRemoveMode() {
    removeMode = !removeMode;
    const removeButton = document.getElementById('remove-mode-button');
    removeButton.classList.toggle('active');
    removeButton.textContent = removeMode ? 'Cancel Remove Mode' : 'Remove Artwork';
}

// event listeners for DOM
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.art-panel');
    panels.forEach(panel => {
        panel.addEventListener('click', handlePanelClick);
    });

    document.getElementById('reset-button').addEventListener('click', resetGallery);
    document.getElementById('add-art-button').addEventListener('click', addNewArtwork);
    document.getElementById('remove-mode-button').addEventListener('click', toggleRemoveMode);
});