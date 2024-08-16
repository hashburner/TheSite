/* Bookings, Contact, and Pricing specific styles */
#bookings, #pricing {
    background-color: #f5f5f5;
    padding: 6rem 0;
}

.booking-grid, .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.calendar-container, .booking-form-container, .pricing-item {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Calendar styles */
#availability-calendar {
    width: 100%;
    height: 300px;
}

/* Booking form styles */
#booking-form {
    display: flex;
    flex-direction: column;
}

#booking-form label {
    margin-top: 1rem;
}

#booking-form input,
#booking-form select,
#booking-form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#booking-form button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #ff5e5e;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#booking-form button:hover {
    background-color: #ff7a7a;
}

/* Pricing styles */
.pricing-item {
    text-align: center;
}

.pricing-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ff5e5e;
    margin-bottom: 1rem;
}

.pricing-item ul {
    list-style-type: none;
    padding: 0;
}

.pricing-item li {
    margin-bottom: 0.5rem;
}

.pricing-note {
    text-align: center;
    margin-top: 2rem;
    font-style: italic;
}

/* Responsive design */
@media screen and (max-width: 768px) {
    .booking-grid, .pricing-grid {
        grid-template-columns: 1fr;
    }
}
