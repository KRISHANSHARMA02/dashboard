"use client"
import React, { useState } from 'react';
import Layout from '@/components/layout';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([
    { id: 1, title: "Add today's plane", start: new Date(), resourceId: 'a' },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
    setModalIsOpen(true);
  };

  const handleEventAdd = () => {
    if (eventTitle.trim() !== '') {
      const newEvent = {
        id: events.length + 1,
        title: eventTitle,
        start: selectedDate,
        resourceId: 'a', // Update with appropriate resource ID
      };
      setEvents([...events, newEvent]);
      setEventTitle('');
      setSelectedDate(null);
      setModalIsOpen(false);
    }
  };

  const handleEventDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <Layout>
      <div className='container mx-auto w-[80vw] pl-10 py-8'>
        <h1 className='text-2xl font-semibold mb-4'>Calendar</h1>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,resourceTimelineWeek,timeGridWeek',
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}
          events={events}
          className='mt-8 rounded-lg shadow-md bg-white p-4'
          select={handleDateSelect}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal'
          overlayClassName='overlay'
        >
          <div className='p-4'>
            <h2 className='text-lg font-semibold mb-2'>Add Event for {selectedDate}</h2>
            <input
              type='text'
              className='w-full border border-gray-300 rounded-md p-2 mb-2'
              placeholder='Event Title'
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <button
              className='bg-orange-500 text-white px-4 py-2 rounded-md mr-2'
              onClick={handleEventAdd}
            >
              Add Event
            </button>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded-md'
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
        <div className='mt-8'>
          <h2 className='text-lg font-semibold mb-2'>Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id} className='mb-2'>
                {event.title} - {new Date(event.start).toDateString()}
                <button
                  className='bg-red-500 text-white px-2 py-1 rounded-md ml-2'
                  onClick={() => handleEventDelete(event.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
