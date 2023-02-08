import { AboutPage } from "@/interfaces/AboutPage";
import { Benefits } from "@/interfaces/Benefits";
import { PostsData, SinglePostData } from "@/interfaces/Posts";
import { TransfersPage } from "@/interfaces/TransfersPage";

import { VehiclesData } from "./../interfaces/Vehicles";

export const fetchVehicles = async () => {
  const res: VehiclesData = await fetch(
    process.env.NEXT_PUBLIC_API + "/api/vehicles?populate=*"
  ).then((data) => data?.json());

  return res;
};

export const fetchBenefits = async () => {
  const res: Benefits = await fetch(
    process.env.NEXT_PUBLIC_API + "/api/benefit-cards?populate=*"
  ).then((data) => data?.json());

  return res;
};

export const fetchAboutPage = async () => {
  const res: AboutPage = await fetch(
    process.env.NEXT_PUBLIC_API + "/api/about?populate=*"
  ).then((data) => data.json());

  return res;
};

export const fetchTransfersPage = async () => {
  const res: TransfersPage = await fetch(
    process.env.NEXT_PUBLIC_API + "/api/transfer?populate=deep"
  ).then((data) => data.json());

  return res;
};

export const fetchPosts = async () => {
  const res: PostsData = await fetch(
    process.env.NEXT_PUBLIC_API + "/api/posts?populate=deep"
  ).then((data) => data.json());

  return res;
};

export const fetchPostBySlug = async (slug: string) => {
  const res: PostsData = await fetch(
    process.env.NEXT_PUBLIC_API +
      `/api/posts?filters[slug]=${slug}&populate=deep`
  ).then((data) => data.json());

  return res;
};

export const fetchPostById = async (id: string) => {
  const res: SinglePostData = await fetch(
    process.env.NEXT_PUBLIC_API + `/api/posts/${id}?populate=deep`
  ).then((data) => data.json());

  return res;
};
