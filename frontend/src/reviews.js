const reviewArr = [
  {
    name: 'bob',
    rating: 5,
    date: new Date(),
    email: 'bob@bob.com',
    comment: 'fantastic job well done',
    ownerApproved: true
  },
  {
    name: 'fads',
    rating: 3,
    date: new Date(),
    email: 'bob@bob.com',
    comment: 'fantastic job well done',
    ownerApproved: true
  },
  {
    name: 'fsadfsdfdsf',
    rating: 3,
    date: new Date(),
    email: 'bob@bob.com',
    comment: 'fantastic job well done',
    ownerApproved: true
  },
  {
    name: 'adfddsfsd',
    rating: 3,
    date: new Date(),
    email: 'bob@bob.com',
    comment: 'fantastic job well done',
    ownerApproved: true
  },
  {
    name: 'sdafdsafdsa',
    rating: 1,
    date: new Date(),
    email: 'bob@bob.com',
    comment: 'trash job',
    ownerApproved: false
  },
]

const choseWebsiteReviews = () => {
  const finalWebsiteReviews = []
  reviewArr.map(review => {
    if (review.ownerApproved === true) {
      finalWebsiteReviews.push(review)
    }
  })
  return finalWebsiteReviews
}

export default choseWebsiteReviews