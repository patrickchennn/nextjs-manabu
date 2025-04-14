--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Ubuntu 17.4-1.pgdg24.04+2)
-- Dumped by pg_dump version 17.4 (Ubuntu 17.4-1.pgdg24.04+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: patrick
--

INSERT INTO public.articles VALUES (14, 'asdfasdfasdfasd', 'f123e423', '23ed23d');


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: patrick
--

SELECT pg_catalog.setval('public.articles_id_seq', 16, true);


--
-- PostgreSQL database dump complete
--

